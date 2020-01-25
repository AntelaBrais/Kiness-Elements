import React from 'react'
import { ListItem as Precursor } from 'react-native-elements'
import styled from 'styled-components'

function ListItem(props) {
  return <Precursor {...props}>{props.children}</Precursor>
}

function changeStyle(props) {
  if (props.card) {
    return {
      borderRadius: 7,
      borderColor: 'transparent',
      shadowColor: 'rgba(0,0,0,0.2)',
      shadowOffset: { height: 3, width: 0 },
      shadowOpacity: 0.7,
      shadowRadius: 5,
      margin: 15,
      padding: 15,
      marginBottom: 0
    }
  }
}

const StyledListItem = styled(ListItem).attrs((props) => ({
  containerStyle: changeStyle(props)
}))``

export default StyledListItem