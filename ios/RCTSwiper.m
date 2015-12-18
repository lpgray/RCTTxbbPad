//
//  RCTSwiper.m
//  RCTTxbbPad
//
//  Created by zhangyang on 15/12/15.
//  Copyright © 2015年 Wisorg. All rights reserved.
//

#import "RCTViewManager.h"
#import <MapKit/MapKit.h>

@interface RCTSwiper : RCTViewManager
@end

@implementation RCTSwiper

RCT_EXPORT_MODULE()

- (UIView *)view
{
  UIView *view = [[UIView alloc] init];
  view.backgroundColor = [UIColor colorWithRed:0 green:0 blue:0 alpha:1];
  CGRect rc = [UIScreen mainScreen].bounds;
  [view setBounds:rc];
  NSLog(@"screenWidth is %f, height is %f", view.bounds.size.width, view.bounds.size.height);
  return view;
//  MKMapView *mapView = [[MKMapView alloc] init];
//  NSLog(@"map view width is %f", mapView.bounds.size.width);
//  return mapView;
}

@end
