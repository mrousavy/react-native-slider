/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

import type {HostComponent} from 'react-native';
import type {ColorValue} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import type {ImageSource} from 'react-native/Libraries/Image/ImageSource';
import type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type {
  Int32,
  BubblingEventHandler,
} from 'react-native/Libraries/Types/CodegenTypes';

type Event = $ReadOnly<{|
  value: ?Int32,
  fromUser?: ?boolean,
|}>;

export type NativeProps = $ReadOnly<{|
  ...ViewProps,
  accessibilityUnits?: string,
  accessibilityIncrements?: $ReadOnlyArray<string>,
  disabled?: ?boolean,
  enabled?: ?boolean,
  inverted?: ?boolean,
  vertical?: ?boolean,
  maximumTrackImage?: ?ImageSource,
  maximumTrackTintColor?: ?ColorValue,
  maximumValue?: ?Int32,
  minimumTrackImage?: ?ImageSource,
  minimumTrackTintColor?: ?ColorValue,
  minimumValue?: ?Int32,
  onChange?: ?BubblingEventHandler<Event>,
  onRNCSliderSlidingStart?: ?BubblingEventHandler<Event>,
  onRNCSliderSlidingComplete?: ?BubblingEventHandler<Event>,
  onRNCSliderValueChange?: ?BubblingEventHandler<Event>,
  step?: ?Int32,
  testID?: ?string,
  thumbImage?: ?ImageSource,
  thumbTintColor?: ?ColorValue,
  trackImage?: ?ImageSource,
  value?: ?Int32,
|}>;

export default (codegenNativeComponent<NativeProps>(
  'RNCSlider',
): HostComponent<NativeProps>);
