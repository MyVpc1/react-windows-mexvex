import React from 'react'

export interface AppThemeProps {
  color ?: any;
  scheme ?: 'light' | 'dark' | 'system';
  onMount ?: Function;
  onColorChange ?: Function;
  onSchemeChange ?: Function;
}
declare const AppTheme: React.FC<AppThemeProps>

export default AppTheme