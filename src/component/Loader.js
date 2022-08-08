import React from 'react'
import {Stack} from "@mui/material"
import {Rings} from "react-loader-spinner"

const Loader = () => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" width="100%">
        <Rings color="#FF2625" height={80} width={80} />
    </Stack>
  )
}

export default Loader