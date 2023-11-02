import { Box, HStack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  to: string;
  isActive?: boolean;
}

const NavButton: FC<Props> = ({ title, to, isActive }) => {
  const navigate = useNavigate();

  const _isActive = isActive || window.location.pathname === to;

  return (
    <HStack justify="end">
      <Box
        p={2}
        borderBottomWidth={2}
        borderColor={_isActive ? 'primary.400' : 'transparent'}
        cursor="pointer"
        _hover={{
          borderColor: _isActive ? 'primary.400' : 'gray.300',
        }}
        onClick={() => navigate(to)}
      >
        <Text fontWeight={_isActive ? 'bold' : 'semibold'}>{title}</Text>
      </Box>
    </HStack>
  );
};

export default NavButton;
