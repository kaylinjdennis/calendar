import { createTheme } from "@mui/material/styles";

export default createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					// color: "black",
					// borderColor: "grey",
					primary: "black",
					'&:hover': {
						borderColor: "black",
						borderSize: "50px"
					}
				},
			},
		},
	},
});