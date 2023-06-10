import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';

import { Path } from 'react-native-svg';

const DownloadIcon = createIcon({
  Root,
  viewBox: '0 0 21 21',
  path: (
    <Path
      d="M15.5015 17.8749C15.7776 17.8749 16.0015 18.0987 16.0015 18.3749C16.0015 18.6203 15.8246 18.8245 15.5913 18.8668L15.5015 18.8749H4.50146C4.22532 18.8749 4.00146 18.651 4.00146 18.3749C4.00146 18.1294 4.17834 17.9253 4.41159 17.8829L4.50146 17.8749H15.5015ZM10.0016 2.87708C10.2471 2.87708 10.4512 3.05408 10.4934 3.28734L10.5015 3.37722L10.4975 15.1711L14.1429 11.5227C14.3163 11.349 14.5857 11.3295 14.7807 11.4643L14.85 11.5221C15.0237 11.6955 15.0432 11.9649 14.9084 12.1599L14.8506 12.2292L10.3589 16.7292C10.2864 16.8018 10.1971 16.8475 10.1035 16.8662L9.99754 16.876C9.83657 16.876 9.69339 16.7998 9.60197 16.6817L5.14533 12.2298C4.94992 12.0347 4.9497 11.7181 5.14482 11.5227C5.31826 11.349 5.58768 11.3295 5.78264 11.4644L5.85193 11.5222L9.49747 15.1631L9.50146 3.37693C9.50154 3.10079 9.72547 2.87708 10.0016 2.87708Z"
      fill="currentColor"
    />
  ),
});

DownloadIcon.displayName = 'DownloadIcon';

export { DownloadIcon };
