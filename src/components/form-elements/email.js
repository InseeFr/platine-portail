import React from 'react';

const Email = props => {
  const { valid, touched } = props;

  const formControl = touched && !valid ? 'form-control  control-error' : 'form-control';

  return (
    <div className="form-group">
      <input type="email" className={formControl} {...props} />
    </div>
  );
};

export default Email;
