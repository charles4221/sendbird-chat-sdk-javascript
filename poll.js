import{_ as t,b as e,aj as r,c as n,g as o,r as s,S as u}from"./__bundle-6339961e.js";export{a4 as Poll,ak as PollOption,al as PollStatus}from"./__bundle-6339961e.js";import{b as l,c,v as p,d,e as g,f,g as v}from"./__bundle-42a88e27.js";export{P as PollListQuery,h as PollUpdateEvent,i as PollVoteEvent,a as PollVoterListQuery}from"./__bundle-42a88e27.js";var m=function(r){function a(){var t=null!==r&&r.apply(this,arguments)||this;return t.name="poll",t}return t(a,r),a.prototype.init=function(t,e){var a=e.sdkState,n=e.dispatcher,o=e.sessionManager,i=e.requestQueue,s=e.logger,u=e.onlineDetector,c=e.cacheContext;r.prototype.init.call(this,t,{sdkState:a,dispatcher:n,sessionManager:o,requestQueue:i,logger:s,onlineDetector:u,cacheContext:c}),this._manager=new l(t,{sdkState:a,dispatcher:n,sessionManager:o,requestQueue:i,logger:s,onlineDetector:u,cacheContext:c})},a.prototype.create=function(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(r){return e=o(o({},c),t),s(p(e)).throw(u.invalidParameters),[2,this._manager.create(e)]}))}))},a.prototype.get=function(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(r){return e=o(o({},d),t),s(g(e)).throw(u.invalidParameters),[2,this._manager.get(e)]}))}))},a.prototype.getOption=function(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(r){return e=o(o({},f),t),s(v(e)).throw(u.invalidParameters),[2,this._manager.getOption(e)]}))}))},a.prototype.buildPollFromSerializedData=function(t){return this._manager.buildPollFromSerializedData(t)},a}(r);export{m as PollModule};
