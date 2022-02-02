import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
interface ProfileProps {
  showProfileData: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Rafael Lupo</Text>
          <Text color="gray.300" fontSize="small">
            rafaellupo@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Rafael Lupo" />
    </Flex>
  );
}
