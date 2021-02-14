import React from 'react';
import { ListItem } from '@chakra-ui/react';
import { Guild } from '../../lib/api/models';
import { Link, useLocation } from 'react-router-dom';
import { StyledTooltip } from '../sections/StyledTooltip';

interface GuildListItemProps {
  guild: Guild
}

export const GuildListItem: React.FC<GuildListItemProps> = ({ guild }) => {

  const location = useLocation();
  const isActive = location.pathname.includes(guild.id);

  return (
    <Link to={`/channels/${guild.id}/${guild.default_channel_id}`}>
      <StyledTooltip label={guild.name} position={'right'}>
        <ListItem
          h='48px'
          w='48px'
          m='auto'
          mb='3'
          fontSize='24px'
          alignItems='center'
          justifyContent='center'
          display='flex'
          bg={isActive ? 'highlight.standard' : 'brandGray.light'}
          borderRadius={isActive ? '35%' : '50%'}
          color={isActive ? 'white' : undefined}
          _hover={{
            cursor: 'pointer',
            borderRadius: '35%',
            bg: 'highlight.standard',
            color: 'white',
          }}
        >
          {guild.name[0]}
        </ListItem>
      </StyledTooltip>
    </Link>
  );
};
