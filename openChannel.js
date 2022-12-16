import{_ as n,j as e,k as t,I as r,T as a,i,q as s,A as o,b1 as u,b2 as c,b as l,c as h,e as d,an as p,U as f,W as C,H as v,J as _,z as y,a5 as m,ax as g,a6 as E,C as U,aT as w,u as T,S as N,l as M,n as H,V as b,aR as I,y as O,r as D,X as x,o as A}from"./__bundle-515949f8.js";import{j as P,k as R,l as L,n as k,m as F,o as S,p as q,D as Q,q as z,r as K,t as W,e as j}from"./__bundle-c7fc54ef.js";import{C as G,a as B,O as X,M as V,T as Y,R as Z,U as J,A as $,B as nn}from"./__bundle-8da6f5eb.js";var en=function(r){function a(){var n=null!==r&&r.apply(this,arguments)||this;return n._channels=new Map,n._enteredChannelUrls=[],n}return n(a,r),Object.defineProperty(a.prototype,"enteredChannels",{get:function(){var n=this;return this._enteredChannelUrls.map((function(e){return n._channels.get(e)})).filter((function(n){return null!==n}))},enumerable:!1,configurable:!0}),a.prototype.isEnteredChannel=function(n){return this._enteredChannelUrls.includes(n)},a.prototype.enter=function(n){this._enteredChannelUrls.indexOf(n)<0&&this._enteredChannelUrls.push(n)},a.prototype.exit=function(n){var e=this._enteredChannelUrls.indexOf(n);e>=0&&this._enteredChannelUrls.splice(e,1)},a.prototype.exitAll=function(){this._enteredChannelUrls=[]},a.prototype.get=function(n){var r;return e(this,void 0,void 0,(function(){return t(this,(function(e){return[2,null!==(r=this._channels.get(n))&&void 0!==r?r:null]}))}))},a.prototype.upsert=function(n){return e(this,void 0,void 0,(function(){var e=this;return t(this,(function(t){return n.forEach((function(n){if(e._channels.has(n.url)){var t=e._channels.get(n.url);Object.assign(t,n)}else e._channels.set(n.url,n)})),[2]}))}))},a.prototype.remove=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){return this._channels.delete(n),this.exit(n),[2]}))}))},a.prototype.clear=function(){return e(this,void 0,void 0,(function(){return t(this,(function(n){return this._channels.clear(),this._enteredChannelUrls=[],[2]}))}))},a}(r),tn={channelUrl:null,name:null,coverUrlOrImage:null,data:null,customType:null,operatorUserIds:null},rn=function(e){function t(n){var t=n.channelUrl,r=n.isInternalCall,a=e.call(this)||this;return a.method=o.GET,a.path="".concat(r?u:c,"/").concat(encodeURIComponent(t)),a}return n(t,e),t}(l),an=function(e){function t(n,t){var r=e.call(this,n,t)||this;return r.channel=null,r.channel=new gn(n,t),r}return n(t,e),t}(h),sn=function(e){function t(n){var t=this,r=n.channelUrl,a=n.coverUrlOrImage,u=n.name,l=n.data,h=n.customType,p=n.operatorUserIds;return(t=e.call(this)||this).method=o.POST,t.path=c,t.params=d({channel_url:r,cover_url:i("string",a)?a:null,cover_file:s(a)?a:null,name:u,data:l,custom_type:h,operators:p}),t}return n(t,e),t}(l);!function(e){function t(n,t){var r=e.call(this,n,t)||this;return r.channel=new gn(n,t),r}n(t,e)}(h);var on=function(e){function t(n){var t=n.channelUrl;return e.call(this,{code:"ENTR",payload:{channel_url:t},ackRequired:!0})||this}return n(t,e),t}(p),un=function(e){function t(n,t,r){var a,i,s=this;return s=e.call(this,n,"SYEV",r)||this,r.data&&(s.participantCount=null!==(a=r.data.participant_count)&&void 0!==a?a:0,s.user=new f(n,r.data),s.ts=null!==(i=r.data.edge_ts)&&void 0!==i?i:0),s}return n(t,e),t}(G),cn=function(e){function t(n){var t=n.channelUrl;return e.call(this,{code:"EXIT",payload:{channel_url:t},ackRequired:!0})||this}return n(t,e),t}(p),ln=function(e){function t(n,t,r){var a,i,s=this;return s=e.call(this,n,"EXIT",r)||this,r.data&&(s.participantCount=null!==(a=r.data.participant_count)&&void 0!==a?a:0,s.user=new f(n,r.data),s.ts=null!==(i=r.data.edge_ts)&&void 0!==i?i:0),s}return n(t,e),t}(G),hn={},dn=function(){function n(n,e){var t=e.sdkState,r=e.dispatcher,a=e.requestQueue,i=this;return hn[n]||(this._iid=n,this._sdkState=t,this._requestQueue=a,this._dispatcher=r,this._openChannelCache=new en(n),this._openChannelHandlers=new Map,this._dispatcher.on((function(n){var e,t;if(n instanceof C)i._handleEvent(n);else if(n instanceof v&&n.stateType===_.CONNECTED){var r=i._openChannelCache.enteredChannels;try{for(var a=y(r),s=a.next();!s.done;s=a.next()){s.value.enter()}}catch(n){e={error:n}}finally{try{s&&!s.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}}})),hn[n]=this),hn[n]}return n.of=function(n){return hn[n]},n.prototype.buildOpenChannelFromSerializedData=function(n){var e=m(n);return new gn(this._iid,gn.payloadify(e))},n.prototype.getChannelFromCache=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,this._openChannelCache.get(n)];case 1:return[2,e.sent()]}}))}))},n.prototype.upsertChannelsToCache=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,this._openChannelCache.upsert(n)];case 1:return e.sent(),[2]}}))}))},n.prototype.removeChannelsFromCache=function(n){return e(this,void 0,void 0,(function(){var e,r,a,i,s,o;return t(this,(function(t){switch(t.label){case 0:t.trys.push([0,5,6,7]),e=y(n),r=e.next(),t.label=1;case 1:return r.done?[3,4]:(a=r.value,[4,this._openChannelCache.remove(a)]);case 2:t.sent(),t.label=3;case 3:return r=e.next(),[3,1];case 4:return[3,7];case 5:return i=t.sent(),s={error:i},[3,7];case 6:try{r&&!r.done&&(o=e.return)&&o.call(e)}finally{if(s)throw s.error}return[7];case 7:return[2]}}))}))},n.prototype.setEnteredToCache=function(n){this._openChannelCache.enter(n.url)},n.prototype.setExitedToCache=function(n){this._openChannelCache.exit(n.url)},n.prototype._handleEvent=function(n){return e(this,void 0,void 0,(function(){var r,a,i,s,o,u,c,l,h,d,p,f,C,v,_,m,T,N,M,H,b,I,O,D,x,A,j,nn,en,tn,rn,an,sn,on,cn,hn,dn,pn,fn,Cn,vn,_n,yn,mn,gn,En,Un,wn,Tn,Nn,Mn,Hn,bn,In,On,Dn,xn,An,Pn,Rn,Ln=this;return t(this,(function(kn){switch(kn.label){case 0:switch(kn.trys.push([0,51,,52]),n.code){case"MESG":case"FILE":case"ADMM":case"BRDM":return[3,1];case"MEDI":case"FEDI":case"AEDI":return[3,4];case"DELM":return[3,7];case"MRCT":return[3,10];case"MTHD":return[3,13];case"MCNT":return[3,16];case"SYEV":return[3,27]}return[3,50];case 1:return s=null,"MESG"===n.code?s=n.as(W):"FILE"===n.code?s=n.as(w):"ADMM"!==n.code&&"BRDM"!=n.code||(s=n.as($)),s?(r=s.message,a=s.isMentioned,r.channelType!==U.OPEN?[3,3]:[4,this.getChannel(r.channelUrl,!0)]):[3,3];case 2:i=kn.sent(),E((function(){return e(Ln,void 0,void 0,(function(){var n,e,s,o,u;return t(this,(function(t){try{for(n=y(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())s=e.value,this._openChannelCache.isEnteredChannel(i.url)&&(s.onMessageReceived(i,r),a&&s.onMentionReceived(i,r))}catch(n){o={error:n}}finally{try{e&&!e.done&&(u=n.return)&&u.call(n)}finally{if(o)throw o.error}}return[2]}))}))})),kn.label=3;case 3:return[3,50];case 4:return s=null,"MEDI"===n.code?s=n.as(z):"FEDI"===n.code?s=n.as(K):"AEDI"===n.code&&(s=n.as(J)),s?(o=s.message,u=s.mentionCountChange,o.channelType!==U.OPEN?[3,6]:[4,this.getChannel(o.channelUrl,!0)]):[3,6];case 5:c=kn.sent(),E((function(){return e(Ln,void 0,void 0,(function(){var n,e,r,a,i;return t(this,(function(t){try{for(n=y(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())r=e.value,this._openChannelCache.isEnteredChannel(c.url)&&(r.onMessageUpdated(c,o),u>0&&r.onMentionReceived(c,o))}catch(n){a={error:n}}finally{try{e&&!e.done&&(i=n.return)&&i.call(n)}finally{if(a)throw a.error}}return[2]}))}))})),kn.label=6;case 6:return[3,50];case 7:return l=n.as(Q),I=l.channelUrl,f=l.channelType,h=l.messageId,f!==U.OPEN?[3,9]:[4,this.getChannel(I,!0)];case 8:d=kn.sent(),E((function(){return e(Ln,void 0,void 0,(function(){var n,e,r,a,i;return t(this,(function(t){try{for(n=y(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())r=e.value,this._openChannelCache.isEnteredChannel(d.url)&&r.onMessageDeleted(d,h)}catch(n){a={error:n}}finally{try{e&&!e.done&&(i=n.return)&&i.call(n)}finally{if(a)throw a.error}}return[2]}))}))})),kn.label=9;case 9:return[3,50];case 10:return p=n.as(Z),I=p.channelUrl,f=p.channelType,C=p.event,f!==U.OPEN?[3,12]:[4,this.getChannel(I,!0)];case 11:v=kn.sent(),E((function(){return e(Ln,void 0,void 0,(function(){var n,e,r,a,i;return t(this,(function(t){try{for(n=y(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())r=e.value,this._openChannelCache.isEnteredChannel(v.url)&&r.onReactionUpdated(v,C)}catch(n){a={error:n}}finally{try{e&&!e.done&&(i=n.return)&&i.call(n)}finally{if(a)throw a.error}}return[2]}))}))})),kn.label=12;case 12:return[3,50];case 13:return(_=n.as(Y).event).channelType!==U.OPEN?[3,15]:[4,this.getChannel(_.channelUrl,!0)];case 14:m=kn.sent(),E((function(){return e(Ln,void 0,void 0,(function(){var n,e,r,a,i;return t(this,(function(t){try{for(n=y(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())r=e.value,this._openChannelCache.isEnteredChannel(m.url)&&r.onThreadInfoUpdated(m,_)}catch(n){a={error:n}}finally{try{e&&!e.done&&(i=n.return)&&i.call(n)}finally{if(a)throw a.error}}return[2]}))}))})),kn.label=15;case 15:return[3,50];case 16:T=n.as(V).openChannelMemberCounts,N=[],kn.label=17;case 17:kn.trys.push([17,22,23,24]),M=y(T),H=M.next(),kn.label=18;case 18:return H.done?[3,21]:(b=H.value,I=b.channelUrl,sn=b.participantCount,O=b.updatedAt,[4,this.getChannelFromCache(I)]);case 19:(D=kn.sent())&&D._updateParticipantCount(sn,O)&&N.push(D),kn.label=20;case 20:return H=M.next(),[3,18];case 21:return[3,24];case 22:return x=kn.sent(),Pn={error:x},[3,24];case 23:try{H&&!H.done&&(Rn=M.return)&&Rn.call(M)}finally{if(Pn)throw Pn.error}return[7];case 24:return N.length>0?[4,this.upsertChannelsToCache(N)]:[3,26];case 25:kn.sent(),E((function(){return e(Ln,void 0,void 0,(function(){var n,e,r,a;return t(this,(function(t){try{for(n=y(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())e.value.onChannelMemberCountChanged(N)}catch(n){r={error:n}}finally{try{e&&!e.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}}return[2]}))}))})),kn.label=26;case 26:return[3,50];case 27:if(!(A=n.as(G).event).isOpenChannelEvent)return[3,49];switch(A.category){case B.CHANNEL_ENTER:return[3,28];case B.CHANNEL_EXIT:return[3,30];case B.CHANNEL_OPERATOR_UPDATE:return[3,32];case B.USER_CHANNEL_MUTE:case B.USER_CHANNEL_UNMUTE:return[3,34];case B.USER_CHANNEL_BAN:case B.USER_CHANNEL_UNBAN:return[3,36];case B.CHANNEL_FREEZE:case B.CHANNEL_UNFREEZE:return[3,38];case B.CHANNEL_DELETED:return[3,40];case B.CHANNEL_PROP_CHANGED:return[3,43];case B.CHANNEL_META_DATA_CHANGED:return[3,45];case B.CHANNEL_META_COUNTERS_CHANGED:return[3,47]}return[3,49];case 28:return[4,this.getChannel(A.channelUrl,!0)];case 29:return j=kn.sent(),nn=n.as(un),sn=nn.participantCount,en=nn.user,tn=j._updateParticipantCount(sn,A.ts),E((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){n.onUserEntered(j,en),tn&&n.onChannelParticipantCountChanged(j)})),[2]}))}))})),[3,49];case 30:return[4,this.getChannel(A.channelUrl,!0)];case 31:return rn=kn.sent(),an=n.as(ln),sn=an.participantCount,on=an.user,cn=rn._updateParticipantCount(sn,A.ts),E((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){n.onUserExited(rn,on),cn&&n.onChannelParticipantCountChanged(rn)})),[2]}))}))})),[3,49];case 32:return[4,this.getChannel(A.channelUrl,!0)];case 33:return hn=kn.sent(),dn=n.as(X).operators,hn.operators=dn,this.upsertChannelsToCache([hn]),E((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){n.onOperatorUpdated(hn,dn)})),[2]}))}))})),[3,49];case 34:return[4,this.getChannel(A.channelUrl,!0)];case 35:return pn=kn.sent(),fn=A.category===B.USER_CHANNEL_MUTE,Cn=n.as(fn?S:q).user,E((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){fn?n.onUserMuted(pn,Cn):n.onUserUnmuted(pn,Cn)})),[2]}))}))})),[3,49];case 36:return[4,this.getChannel(A.channelUrl,!0)];case 37:return vn=kn.sent(),_n=A.category===B.USER_CHANNEL_BAN,yn=n.as(_n?k:F).user,E((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){_n?n.onUserBanned(vn,yn):n.onUserUnbanned(vn,yn)})),[2]}))}))})),[3,49];case 38:return[4,this.getChannel(A.channelUrl,!0)];case 39:return mn=kn.sent(),gn=n.as(L).freeze,mn.isFrozen=gn,this.upsertChannelsToCache([mn]),E((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){gn?n.onChannelFrozen(mn):n.onChannelUnfrozen(mn)})),[2]}))}))})),[3,49];case 40:return[4,this.getChannel(A.channelUrl,!0)];case 41:return En=kn.sent(),[4,this.removeChannelsFromCache([En.url])];case 42:return kn.sent(),E((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){n.onChannelDeleted(En.url,En.channelType)})),[2]}))}))})),[3,49];case 43:return[4,this.getChannelWithoutCache(A.channelUrl,!0)];case 44:return Un=kn.sent(),E((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){n.onChannelChanged(Un)})),[2]}))}))})),[3,49];case 45:return[4,this.getChannel(A.channelUrl,!0)];case 46:return wn=kn.sent(),Tn=n.as(R),Nn=Tn.created,Mn=Tn.updated,Hn=Tn.deleted,Nn&&wn._upsertCachedMetaData(Nn,A.ts),Mn&&wn._upsertCachedMetaData(Mn,A.ts),Hn&&wn._removeFromCachedMetaData(Hn,A.ts),E((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){Nn&&n.onMetaDataCreated(wn,Nn),Mn&&n.onMetaDataUpdated(wn,Mn),Hn&&n.onMetaDataDeleted(wn,Hn)})),[2]}))}))})),[3,49];case 47:return[4,this.getChannel(A.channelUrl,!0)];case 48:return bn=kn.sent(),In=n.as(P),On=In.created,Dn=In.updated,xn=In.deleted,E((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){On&&n.onMetaCounterCreated(bn,On),Dn&&n.onMetaCounterUpdated(bn,Dn),xn&&n.onMetaCounterDeleted(bn,xn)})),[2]}))}))})),[3,49];case 49:return[3,50];case 50:return[3,52];case 51:if(An=kn.sent(),g(An))throw An;return[3,52];case 52:return[2]}}))}))},n.prototype.addHandler=function(n,e){this._openChannelHandlers.set(n,e)},n.prototype.removeHandler=function(n){this._openChannelHandlers.delete(n)},n.prototype.clearHandler=function(){this._openChannelHandlers.clear()},n.prototype.getChannel=function(n,r){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){switch(t.label){case 0:T(i("string",n)).throw(N.invalidParameters),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.getChannelFromCache(n)];case 2:return(e=t.sent())?[2,e]:[3,4];case 3:return t.sent(),[3,4];case 4:return[4,this.getChannelWithoutCache(n)];case 5:return[2,t.sent()]}}))}))},n.prototype.getChannelWithoutCache=function(n,r){return void 0===r&&(r=!1),e(this,void 0,void 0,(function(){var e,a,s;return t(this,(function(t){switch(t.label){case 0:return T(i("string",n)).throw(N.invalidParameters),e=new rn({channelUrl:n,isInternalCall:r}),[4,this._requestQueue.send(e)];case 1:return a=t.sent(),s=a.as(an).channel,[4,this.upsertChannelsToCache([s])];case 2:return t.sent(),[2,s]}}))}))},n.prototype.createChannel=function(n){return e(this,void 0,void 0,(function(){var e,r,o,u;return t(this,(function(t){switch(t.label){case 0:return e=M(M({},tn),n),T(function(n){return a("string",n.operatorUserIds,!0)&&(i("string",n.coverUrlOrImage)||s(n.coverUrlOrImage)||null===n.coverUrlOrImage)&&i("string",n.name,!0)&&i("string",n.data,!0)&&i("string",n.customType,!0)&&(i("string",n.channelUrl)&&/^\w+$/.test(n.channelUrl)||null===n.channelUrl)}(e)).throw(N.invalidParameters),r=new sn(e),[4,this._requestQueue.send(r)];case 1:return o=t.sent(),u=o.as(an).channel,this.upsertChannelsToCache([u]),[2,u]}}))}))},n}(),pn={name:null,coverUrlOrImage:null,data:null,customType:null,operatorUserIds:null},fn=function(e){function t(n){var t=this,r=n.channelUrl,a=n.token,i=n.limit;return(t=e.call(this)||this).method=o.GET,t.path="".concat(c,"/").concat(encodeURIComponent(r),"/participants"),t.params={token:a,limit:i},t}return n(t,e),t}(l),Cn=function(e){function t(n,t){var r=e.call(this,n,t)||this;r.token=null,r.participants=[];var a=t.next,i=t.participants;return r.token=a,r.participants=i.map((function(e){return new f(n,e)})),r}return n(t,e),t}(h),vn=function(r){function a(n,e,t){return r.call(this,n,e,U.OPEN,t)||this}return n(a,r),a.prototype._validate=function(){return r.prototype._validate.call(this)},a.prototype.next=function(){return e(this,void 0,void 0,(function(){var n,e,r,a,i,s;return t(this,(function(t){switch(t.label){case 0:return this._validate()?this._isLoading?[3,3]:this._hasNext?(this._isLoading=!0,n=b.of(this._iid).requestQueue,e=new fn(M(M({},this),{token:this._token})),[4,n.send(e)]):[3,2]:[3,5];case 1:return r=t.sent(),a=r.as(Cn),i=a.participants,s=a.token,this._token=s,this._hasNext=!!s,this._isLoading=!1,[2,i];case 2:return[2,[]];case 3:throw N.queryInProgress;case 4:return[3,6];case 5:throw N.invalidParameters;case 6:return[2]}}))}))},a}(H),_n=function(e){function t(n){var t=this,r=n.channelUrl,a=n.coverUrlOrImage,u=n.name,l=n.data,h=n.customType,p=n.operatorUserIds;return(t=e.call(this)||this).method=o.PUT,t.path="".concat(c,"/").concat(encodeURIComponent(r)),t.params=d({cover_url:i("string",a)?a:null,cover_file:s(a)?a:null,name:u,data:l,custom_type:h,operators:p}),t}return n(t,e),t}(l),yn=function(e){function t(n,t){var r=e.call(this,n,t)||this;return r.channel=new gn(n,t),r}return n(t,e),t}(h),mn=function(e){function t(n){var t=this,r=n.channelUrl;return(t=e.call(this)||this).method=o.DELETE,t.path="".concat(c,"/").concat(encodeURIComponent(r)),t}return n(t,e),t}(l);!function(e){function t(n,t){return e.call(this,n,t)||this}n(t,e)}(h);var gn=function(r){function o(n,e){var t,a=this;return(a=r.call(this,n,e)||this)._lastParticipantCountUpdated=0,a.participantCount=0,a.operators=[],a.channelType=U.OPEN,a.participantCount=null!==(t=e.participant_count)&&void 0!==t?t:0,a.operators=Array.isArray(e.operators)?e.operators.map((function(e){return new f(n,e)})):[],a}return n(o,r),o.payloadify=function(n){return n?d(M(M({},j.payloadify(n)),{participant_count:n.participantCount,operators:n.operators.map((function(n){return f.payloadify(n)}))})):null},o.prototype.serialize=function(){return I(this)},o.prototype.isOperator=function(n){return n instanceof f?this.isOperator(n.userId):this.operators.some((function(e){return e.userId===n}))},o.prototype._updateParticipantCount=function(n,e){return e>this._lastParticipantCountUpdated&&(this.participantCount=n,this._lastParticipantCountUpdated=e,!0)},o.prototype.createParticipantListQuery=function(n){return new vn(this._iid,this.url,n)},o.prototype.refresh=function(){return e(this,void 0,void 0,(function(){return t(this,(function(n){switch(n.label){case 0:return[4,dn.of(this._iid).getChannelWithoutCache(this.url)];case 1:return[2,n.sent()]}}))}))},o.prototype.enter=function(){return e(this,void 0,void 0,(function(){var n,e,r,a,i,s;return t(this,(function(t){switch(t.label){case 0:return n=b.of(this._iid).requestQueue,e=new on({channelUrl:this.url}),[4,n.send(e)];case 1:return r=t.sent(),a=r.as(un),i=a.participantCount,s=a.ts,this._updateParticipantCount(i,s),dn.of(this._iid).setEnteredToCache(this),[2]}}))}))},o.prototype.exit=function(){return e(this,void 0,void 0,(function(){var n,e,r,a,i,s;return t(this,(function(t){switch(t.label){case 0:return n=b.of(this._iid).requestQueue,e=new cn({channelUrl:this.url}),[4,n.send(e)];case 1:return r=t.sent(),a=r.as(ln),i=a.participantCount,s=a.ts,this._updateParticipantCount(i,s),dn.of(this._iid).setExitedToCache(this),O.of(this._iid).fileMessageQueue.cancel(this),[2]}}))}))},o.prototype.updateChannel=function(n){return e(this,void 0,void 0,(function(){var e,r,o,u,c;return t(this,(function(t){switch(t.label){case 0:return e=M(M({},pn),n),T(function(n){return a("string",n.operatorUserIds,!0)&&(i("string",n.coverUrlOrImage)||s(n.coverUrlOrImage)||null===n.coverUrlOrImage)&&i("string",n.name,!0)&&i("string",n.data,!0)&&i("string",n.customType,!0)}(e)).throw(N.invalidParameters),r=b.of(this._iid).requestQueue,o=new _n(M({channelUrl:this.url},e)),[4,r.send(o)];case 1:return u=t.sent(),c=u.as(yn).channel,[4,dn.of(this._iid).upsertChannelsToCache([c])];case 2:return t.sent(),[2,c]}}))}))},o.prototype.updateChannelWithOperatorUserIds=function(n,r,a,i,s){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){return e=M(M({},pn),{name:n,coverUrlOrImage:r,data:a,operatorUserIds:i,customType:s}),[2,this.updateChannel(e)]}))}))},o.prototype.delete=function(){return e(this,void 0,void 0,(function(){var n,e;return t(this,(function(t){switch(t.label){case 0:return n=b.of(this._iid).requestQueue,e=new mn({channelUrl:this.url}),[4,n.send(e)];case 1:return t.sent(),[4,dn.of(this._iid).removeChannelsFromCache([this.url])];case 2:return t.sent(),[2]}}))}))},o.prototype.sendUserMessage=function(n){return T(!n.isPinnedMessage).throw(N.notSupportedError),r.prototype.sendUserMessage.call(this,n)},o.prototype.sendFileMessage=function(n){return T(!n.isPinnedMessage).throw(N.notSupportedError),r.prototype.sendFileMessage.call(this,n)},o}(j),En=function(e){function t(n){void 0===n&&(n={});var t=e.call(this)||this;return Object.keys(n).forEach((function(e){t.hasOwnProperty(e)&&(t[e]=n[e])})),t}return n(t,e),t}(function(e){function t(){var n=null!==e&&e.apply(this,arguments)||this;return n.onUserEntered=D,n.onUserExited=D,n.onChannelParticipantCountChanged=D,n}return n(t,e),t}(nn)),Un=function(e){function t(n){var t=this,r=n.token,a=n.limit,i=n.nameKeyword,s=n.urlKeyword,u=n.customTypes,l=n.includeFrozen,h=n.includeMetaData;return(t=e.call(this)||this).method=o.GET,t.path=c,t.params=d({token:r,limit:a,name_contains:i,url_contains:s,custom_types:u,show_frozen:l,show_metadata:h}),t}return n(t,e),t}(l),wn=function(e){function t(n,t){var r=e.call(this,n,t)||this;r.token=null,r.channels=[],r.ts=null;var a=t.next,i=t.channels,s=t.ts;return r.token=a,i&&i.length>0&&(r.channels=i.map((function(e){return new gn(n,e)}))),r.ts="number"==typeof s?s:null,r}return n(t,e),t}(h),Tn=function(r){function s(n,e){var t,a,i,s,o,u=this;return(u=r.call(this,n,e)||this).includeFrozen=!0,u.includeMetaData=!0,u.nameKeyword=null,u.urlKeyword=null,u.customTypes=null,u.includeFrozen=null===(t=e.includeFrozen)||void 0===t||t,u.includeMetaData=null===(a=e.includeMetaData)||void 0===a||a,u.nameKeyword=null!==(i=e.nameKeyword)&&void 0!==i?i:null,u.urlKeyword=null!==(s=e.urlKeyword)&&void 0!==s?s:null,u.customTypes=null!==(o=e.customTypes)&&void 0!==o?o:null,u}return n(s,r),s.prototype._validate=function(){return r.prototype._validate.call(this)&&i("boolean",this.includeFrozen)&&i("boolean",this.includeMetaData)&&i("string",this.nameKeyword,!0)&&i("string",this.urlKeyword,!0)&&a("string",this.customTypes,!0)},s.prototype.next=function(){return e(this,void 0,void 0,(function(){var n,e,r,a,i,s;return t(this,(function(t){switch(t.label){case 0:return this._validate()?this._isLoading?[3,4]:this._hasNext?(this._isLoading=!0,n=b.of(this._iid).requestQueue,e=new Un(M(M({},this),{token:this._token})),[4,n.send(e)]):[3,3]:[3,6];case 1:return r=t.sent(),a=r.as(wn),i=a.channels,s=a.token,this._token=s,this._hasNext=!!s,[4,dn.of(this._iid).upsertChannelsToCache(i)];case 2:return t.sent(),this._isLoading=!1,[2,i];case 3:return[2,[]];case 4:throw N.queryInProgress;case 5:return[3,7];case 6:throw N.invalidParameters;case 7:return[2]}}))}))},s}(x),Nn=function(r){function a(){var n=null!==r&&r.apply(this,arguments)||this;return n.name="openChannel",n}return n(a,r),a.prototype.init=function(n,e){var t=e.sdkState,a=e.dispatcher,i=e.sessionManager,s=e.requestQueue,o=e.logger,u=e.onlineDetector,c=e.cacheContext;r.prototype.init.call(this,n,{sdkState:t,dispatcher:a,sessionManager:i,requestQueue:s,logger:o,onlineDetector:u,cacheContext:c}),this._manager=new dn(n,{sdkState:t,dispatcher:a,requestQueue:s})},a.prototype.createOpenChannelListQuery=function(n){return void 0===n&&(n={}),new Tn(this._iid,n)},a.prototype.addOpenChannelHandler=function(n,e){this._manager.addHandler(n,e)},a.prototype.removeOpenChannelHandler=function(n){this._manager.removeHandler(n)},a.prototype.removeAllOpenChannelHandlers=function(){this._manager.clearHandler()},a.prototype.buildOpenChannelFromSerializedData=function(n){return this._manager.buildOpenChannelFromSerializedData(n)},a.prototype.getChannel=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){return[2,this._manager.getChannel(n)]}))}))},a.prototype.getChannelWithoutCache=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){return[2,this._manager.getChannelWithoutCache(n)]}))}))},a.prototype.createChannel=function(n){return void 0===n&&(n={}),e(this,void 0,void 0,(function(){return t(this,(function(e){return[2,this._manager.createChannel(n)]}))}))},a.prototype.createChannelWithOperatorUserIds=function(n,r,a,i,s){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){return(e=M({},tn)).name=n,e.coverUrlOrImage=r,e.data=a,e.operatorUserIds=i,e.customType=s,[2,this._manager.createChannel(e)]}))}))},a}(A);export{gn as OpenChannel,En as OpenChannelHandler,Tn as OpenChannelListQuery,Nn as OpenChannelModule,vn as ParticipantListQuery};
