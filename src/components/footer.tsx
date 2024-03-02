import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      py={0.5}
      px={2}
      bgcolor='primary.main'
      color='white'
      zIndex={1301}
    >
      <Typography variant="body2" align="center" mr={2}>
        © Alex Pierini - 03/2024
      </Typography>
      <Image
        src="/images/Logo_white_72dpi.png"
        alt="Logo"
        width={50}
        height={50}
      />
    </Box>
  )
}