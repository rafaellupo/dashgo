// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import * as _ from "lodash";
import { stringify } from "querystring";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const prisma = new PrismaClient();

  const query = await prisma.product.findFirst({
    include: {
      variations: {
        include: {
          values: {
            include: {
              productPropertyValue: {
                include: {
                  productProperty: true,
                },
              },
            },
          },
        },
      },
    },
  });
  const distincts = query
    ? query.variations.reduce<Record<string, any>>((acc, cur) => {
        const dominantProp =
          cur.values.filter(
            (o) => o.productPropertyValue.productProperty.name === "Cor"
          )[0] ?? null;
        const otherProps =
          cur.values.filter(
            (o) => o.productPropertyValue.productProperty.name !== "Cor"
          ) ?? null;
        const propVal = dominantProp?.productPropertyValue?.value;
        if (propVal && !_.has(acc, propVal)) {
          acc[propVal] = {
            dominant: dominantProp,
            otherProps,
          };
        } else if (propVal) {
          acc[propVal].otherProps.push(otherProps);
        }
        return acc;
      }, {})
    : [];
  const result = query
    ? {
        ...query,
        variations: {
          variations: [...query.variations],
          grouped: distincts,
        },
      }
    : null;
  res.status(200).json(result);
}
