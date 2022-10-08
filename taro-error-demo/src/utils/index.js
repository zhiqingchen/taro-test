import { connect as connectComponent } from 'react-redux';

export const connect = (mapStateToProps, actions) => {
  return (target) => connectComponent(mapStateToProps, actions)(target);
};
