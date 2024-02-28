import { Avatar as AntdAvatar, AvatarProps } from 'antd'

type Props = AvatarProps & {
    name: string;
}

const CustomAvatar = ({ name, style, ...rest}: Props) => {
  return (
    <AntdAvatar
        alt={"KB"}
        size="small"
        style={{ backgroundColor: "#87068", display: "flex", alignItems: "center", border: "none"}}
    >
        {name}
    </AntdAvatar>
  )
}

export default CustomAvatar