import type { NextPage } from "next";
import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("Email Obrigatório").email("Email Inválido"),
  password: yup.string().required("Senha Obrigatória"),
});

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((r) => setTimeout(r, 2000));
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            label="E-mail"
            type="email"
            {...register("email", { required: "Email Obrigatório" })}
            error={formState.errors.email}
          />
          <Input
            {...register("password")}
            type="password"
            label="Password"
            error={formState.errors.password}
          />
        </Stack>
        <Button
          type="submit"
          mt={6}
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
