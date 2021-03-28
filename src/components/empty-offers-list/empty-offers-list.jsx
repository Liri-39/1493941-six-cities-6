import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const EmptyOffersList = ({location}) => {
  console.info(`<EmptyOffersList />: Render`);
  return <div className="cities">
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {location.name}</p>
        </div>
      </section>
      <div className="cities__right-section"/>
    </div>
  </div>;
};

EmptyOffersList.propTypes = {
  location: PropTypes.object.isRequired
};

const mapStateToProps = ({location}) => ({
  location
});


export default connect(mapStateToProps, null)(EmptyOffersList);
