import 'antd';

declare module 'antd' {
  export interface RowProps {
    children?: React.ReactNode; // 假设你要添加额外的 children 类型
    style?: React.CSSProperties; // 假设你要添加额外的 style 类型
  }
  
  export interface ColProps {
    children?: React.ReactNode; // 假设你要添加额外的 children 类型
    style?: React.CSSProperties; // 假设你要添加额外的 style 类型
    span?: number; // 假设你要添加额外的 span 类型
  }

  export interface InputNumberProps {
    children?: React.ReactNode; // 假设你要添加额外的 children 类型
    style?: React.CSSProperties; // 假设你要添加额外的 style 类型
    
  }
  export interface UploadProps {
    children?: React.ReactNode; // 假设你要添加额外的 children 类型
    style?: React.CSSProperties; // 假设你要添加额外的 style 类型
}

export interface ButtonProps {
    children?: React.ReactNode; // 假设你要添加额外的 children 类型
    style?: React.CSSProperties; // 假设你要添加额外的 style 类型
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // 假设你要添加额外的 onClick 类型
}

  export interface ModalProps {
    children?: React.ReactNode; // 假设你要添加额外的 children 类型
    style?: React.CSSProperties; // 假设你要添加额外的 style 类型
  }

  export interface InputProps {
    children?: React.ReactNode; // 假设你要添加额外的 children 类型
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // 假设你要添加额外的 onChange 类型
    style?: React.CSSProperties; // 假设你要添加额外的 style 类型
    id?: string | number,
  }

  export interface MenuProps {
    children?: React.ReactNode; // 假设你要添加额外的 children 类型
    style?: React.CSSProperties; // 假设你要添加额外的 style 类型
    }

export interface MenuItemProps {
    children?: React.ReactNode; // 假设你要添加额外的 children 类型
    style?: React.CSSProperties; // 假设你要添加额外的 style 类型
    onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void; // 假设你要添加额外的 onClick 类型
    icon?: React.ReactNode; // 假设你要添加额外的 icon 类型
}

export interface TooltipProps {
    children?: React.ReactNode; // 假设你要添加额外的 children 类型
    style?: React.CSSProperties; // 假设你要添加额外的 style 类型
    color?: string; // 假设你要添加额外的 color 类型    
    mouseEnterDelay?: number; // 假设你要添加额外的 mouseEnterDelay 类型
    mouseLeaveDelay?: number; // 假设你要添加额外的 mouseLeaveDelay 类型
}

export interface DropdownProps {
    children?: React.ReactNode; // 假设你要添加额外的 children 类型
    style?: React.CSSProperties; // 假设你要添加额外的 style 类型
}

export interface ButtonProps {
    children?: React.ReactNode; // 假设你要添加额外的 children 类型
    icon?: React.ReactNode; // 假设你要添加额外的 icon 类型
}


}
