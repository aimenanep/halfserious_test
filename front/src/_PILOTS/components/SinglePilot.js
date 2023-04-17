import React from 'react'
import useShipsFetchImage from '../../_SHIPS/hooks/useShipsFetchImage'
import { Box, Loader } from '../../components/styled'
import styled from 'styled-components'
import urls from '../../constants/urls'
import { Link } from 'react-router-dom'

export default function SinglePilot({pilot}) {

  const { _ImageURL, _Loading, _Error } = useShipsFetchImage(urls.SHIP_IMAGE(pilot.name, ""))




  


  return (
    <Box>
        {
          _Loading
           ?
            <Loader />
          :
            <Link  to={`/pilot/${slugify(pilot.name)}`} state={{...pilot, image:_ImageURL} } >
                <Image src={_ImageURL}  />
            </Link>
        }
    </Box>
  )
}


const Image=styled.img`
  width: 90px;
  height: 90px;
  border-radius: 1rem;
`



function slugify(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}