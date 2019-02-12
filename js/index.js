 import {
     closeRoule,
     openRoule
 } from './public';

 import * as wx from './wx'

 wx.getPromise()
     .then(x => wx.getCode(x))
     .then(x => wx.getAccessToken(x))
     .then(x => wx.getRefreshToken(x))
     .then(x => wx.getUserInfo(x))

 //  openRoule();
 //  closeRoule();