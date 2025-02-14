import React, { useState, useEffect } from 'react';

const AnimatedCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
  
    useEffect(() => {
      const updatePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      const updateCursorType = () => {
        const hoveredElement = document.elementFromPoint(position.x, position.y);
        const clickableElements = ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'];
        setIsPointer(
          hoveredElement && (
            clickableElements.includes(hoveredElement.tagName) ||
            window.getComputedStyle(hoveredElement).cursor === 'pointer'
          )
        );
      };
  
      const handleMouseDown = () => setIsClicking(true);
      const handleMouseUp = () => setIsClicking(false);
  
      window.addEventListener('mousemove', updatePosition);
      window.addEventListener('mousemove', updateCursorType);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
  
      return () => {
        window.removeEventListener('mousemove', updatePosition);
        window.removeEventListener('mousemove', updateCursorType);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }, [position.x, position.y]);
  
    return (
      <>
        
        <div className="fixed top-0  left-0 w-full h-full pointer-events-none z-50 sm:hidden md:hidden hidden lg:block">
          <div
            className={`
              fixed w-4 h-4 rounded-full
              transform -translate-x-1/2 -translate-y-1/2
              transition-transform duration-100 ease-out
              mix-blend-difference
              ${isClicking ? 'scale-75' : 'bg-black'}
              ${isPointer ? 'scale-150' : 'scale-100'}
            `}
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`
            }}
          />
          
          <div
            className={`
              fixed w-8 h-8 rounded-full
              transform -translate-x-1/2 -translate-y-1/2
              transition-all duration-300 ease-out
              border border-black mix-blend-difference
              ${isClicking ? 'scale-75 ' : 'scale-100'}
              ${isPointer ? 'scale-150' : 'scale-100'}
            `}
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`
            }}
          />
        </div>
      </>
    );
  };
 export default AnimatedCursor  