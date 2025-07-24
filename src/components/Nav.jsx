import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from 'antd';
import Projects from './Projects';
export default function Nav({ isHome = false }) {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <nav
        className={
          isHome ? 'bg-transparent absolute top-0 left-0 right-0 z-50' : 'bg-white shadow-sm'
        }
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                {isHome ? (
                  ''
                ) : (
                  <Link to="/" className="text-2xl font-abril">
                    Your Name
                  </Link>
                )}
              </div>
            </div>
            <div className="flex items-center">
              <Link
                to="/bio/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                About Me
              </Link>
              {/* <Link
                to="/case-studies/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                My Work
              </Link> */}
              <button
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                onClick={showDrawer}
              >
                My Work
              </button>
              <Link
                to="/tips/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Tips
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Drawer
        title="My Work"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        size="large"
        placement="right"
        className="!bg-white"
        open={open}
      >
        <Projects className="mt-1" includeTitle={false} numColumns={2} />
      </Drawer>
    </>
  );
}
