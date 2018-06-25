import React from 'react'
import PropTypes from 'prop-types'
import { MainPageTemplate } from '../../templates/main-page'

const MainPagePreview = ({ entry, getAsset }) => (
  <MainPageTemplate
    Jumbotrone={{
      title: entry.getIn(['data', 'Jumbotrone', 'title']),
      description: entry.getIn(['data', 'Jumbotrone', 'description']),
    }}
    Intro={{
      title: entry.getIn(['data', 'Intro', 'title']),
      description: entry.getIn(['data', 'Intro', 'description']),
    }}
    Notes={{
      title: entry.getIn(['data', 'Notes', 'title']),
      description: entry.getIn(['data', 'Notes', 'description']),
    }}
    OwnerBox={{
      title: entry.getIn(['data', 'OwnerBox', 'title']),
      description: entry.getIn(['data', 'OwnerBox', 'description']),
      avatar: {
        image: getAsset(entry.getIn(['data', 'OwnerBox', 'avatar', 'image'])),
        alt: entry.getIn(['data', 'OwnerBox', 'avatar', 'alt']),
      }
    }}
  />
)

export default MainPagePreview
