import React from 'react';
import gql, graphql from 'react-apollo';

const ChannelsList = gql`
	query ChannelsListQuery {
    channels {
      name
      phone
    }
  }
`;
 const ChannelsListWithData = graphql(ChannelsListQuery)(ChannelsList);
export default ChannelsList;