// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReactSimpleMaps = require("react-simple-maps");

function make(width, height, children) {
  return ReasonReact.wrapJsForReason(ReactSimpleMaps.ComposableMap, {
              width: width,
              height: height
            }, children);
}

var ComposableMap = /* module */[/* make */make];

function make$1(children) {
  return ReasonReact.wrapJsForReason(ReactSimpleMaps.ZoomableGroup, { }, children);
}

var ZoomableGroup = /* module */[/* make */make$1];

function make$2(geography, children) {
  return ReasonReact.wrapJsForReason(ReactSimpleMaps.Geographies, {
              geography: geography
            }, children);
}

var Geographies = /* module */[/* make */make$2];

function make$3(geography, projection, children) {
  return ReasonReact.wrapJsForReason(ReactSimpleMaps.Geography, {
              geography: geography,
              projection: projection
            }, children);
}

var Geography = /* module */[/* make */make$3];

var MarkerData = /* module */[];

function make$4(marker, children) {
  return ReasonReact.wrapJsForReason(ReactSimpleMaps.Marker, {
              marker: marker
            }, children);
}

var Marker = /* module */[/* make */make$4];

function make$5(children) {
  return ReasonReact.wrapJsForReason(ReactSimpleMaps.Markers, { }, children);
}

var Markers = /* module */[/* make */make$5];

exports.ComposableMap = ComposableMap;
exports.ZoomableGroup = ZoomableGroup;
exports.Geographies = Geographies;
exports.Geography = Geography;
exports.MarkerData = MarkerData;
exports.Marker = Marker;
exports.Markers = Markers;
/* ReasonReact Not a pure module */
