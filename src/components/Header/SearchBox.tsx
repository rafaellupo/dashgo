import { Flex, Input, Icon } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  // const [search, setSearch] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex
      as="label"
      flex="1"
      py={4}
      px={8}
      ml={6}
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      bg="gray.800"
      position="relative"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na Plataforma"
        px={4}
        mr={4}
        ml={6}
        _placeholder={{
          color: "gray.400",
        }}
        ref={searchInputRef}
      />
      <Icon as={RiSearchLine} />
    </Flex>
  );
}
