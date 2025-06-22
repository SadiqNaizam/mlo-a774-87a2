import * as React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginForm from '@/components/Login/LoginForm';

/**
 * IndexPage serves as the main entry point for the application,
 * displaying the login interface.
 * It utilizes the MainAppLayout to center the LoginForm component on the page.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginForm />
    </MainAppLayout>
  );
};

export default IndexPage;
