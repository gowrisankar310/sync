"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Grid, Typography } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

const Forms = () => {
  const router = useRouter();

  return (
    <Grid container spacing={2} display={"flex"}>
      <Grid size={4}>
        <Card
          sx={{
            maxWidth: 100,
            height: 90,
            margin: "auto",
            mt: 5,
            boxShadow: 3,
            cursor:'pointer'
          }}
          
          onClick={() => router.push("/Text-Editor")}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box>
              <DescriptionOutlinedIcon />
              <Typography>Text Editor</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={4}>
        <Card
          sx={{
            maxWidth: 100,
            height: 90,
            margin: "auto",
            mt: 5,
            boxShadow: 3,
            cursor:'pointer'
          }}
          onClick={() => router.push("/Image-Editor")}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box>
              <PictureAsPdfOutlinedIcon />
              <Typography>PDF</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={4}>
        <Card
          sx={{
            maxWidth: 100,
            height: 90,
            margin: "auto",
            mt: 5,
            boxShadow: 3,
            cursor:'pointer'
          }}
          onClick={() => router.push("/Word-Editor")}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box>
              <DescriptionOutlinedIcon />
              <Typography>Word</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Forms;