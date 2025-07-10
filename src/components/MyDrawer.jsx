import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

const MyDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" className="bg-pink-700 hover:!bg-pink-500" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="CNE Website Redesign"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        size="large"
        placement="left"
        className="!bg-pink-200"
        open={open}
      >
        <h2>Hello world!</h2>
        <p>Happy Juneteenth!!!</p>
      </Drawer>
    </>
  );
};
export default MyDrawer;
