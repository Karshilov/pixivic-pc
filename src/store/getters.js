export const user = (state) => state.user;
export const cachedViews = (state) => state.cachedViews;
export const showTab = (state) => state.showTab;
export const likeStatus = (state) => state.likeStatus;
export const followStatus = (state) => state.followStatus;
export const detail = (state) => state.detail;
export const loginBoolean = (state) => state.loginBoolean;
export const loginOrSign = (state) => state.loginOrSign;
export const collectBoolean = (state) => state.collectBoolean;
export const collectInfo = (state) => state.collectInfo;
export const readyCollectItem = (state) => state.readyCollectItem;
export const isVip = (state) => state.user.permissionLevel === 4 || (state.user.permissionLevel > 2
  && new Date(state.user.permissionLevelExpireDate).valueOf() > Date.now());
export const serverAddress = (state) => state.serverAddress;
export const phoneBoolean = (state) => state.phoneBoolean;
