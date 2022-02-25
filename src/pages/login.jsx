import React from 'react';
import { isAuthenticated } from '../utils/auth';

export default function Invoice() {
  if (!isAuthenticated()) {
    return <LayoutPage>Redirecting you to the login screen...</LayoutPage>;
  }
}
