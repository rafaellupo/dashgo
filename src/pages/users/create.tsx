import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Email Obrigatório"),
  email: yup.string().required("Email Obrigatório").email("Email Inválido"),
  password: yup
    .string()
    .required("Senha Obrigatória")
    .min(6, "Mínimo de 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema),
  });
  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((r) => setTimeout(r, 2000));
    console.log(values);
  };
  return (
    <Box>
      <Header />
      <Flex w="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        <Sidebar />
        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={[6, 8]}
        >
          <Heading size="lg" fontWeight="normal">
            Criar Usuário
          </Heading>
          <Divider my={6} borderColor="gray.700" />

          <VStack spacing={[6, 8]}>
            <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
              <Input
                label="Nome completo"
                {...register("name")}
                error={formState.errors.name}
              />
              <Input
                {...register("email")}
                type="email"
                label="E-mail"
                error={formState.errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
              <Input
                {...register("password")}
                type="password"
                label="Senha"
                error={formState.errors.password}
              />
              <Input
                {...register("password_confirmation")}
                error={formState.errors.password_confirmation}
                type="password"
                label="Confirmação de senha"
              />
            </SimpleGrid>
          </VStack>
          <Flex mt={8} justify="flex-end">
            <HStack spacing={4}>
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                colorScheme="pink"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
