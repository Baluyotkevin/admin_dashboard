import { getNameInitials } from '@/utilities';
import { Avatar as AntdAvatar, AvatarProps } from 'antd'

type Props = AvatarProps & {
    name: string | undefined;
}

const CustomAvatar = ({ name, style, ...rest}: Props) => {
  return (
    <AntdAvatar
        alt={name}
        size="small"
        style={{ 
          backgroundColor: "#87068", 
          display: "flex", 
          alignItems: "center", 
          border: "none", 
          ...style
          }}
          // {...rest}
    >
        {getNameInitials(name || '')}
    </AntdAvatar>
  )
}

export default CustomAvatar