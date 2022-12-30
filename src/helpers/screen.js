function getScreenSize() {
  const { clientWidth: width, clientHeight: height } =
    window.document.documentElement;
  const orientation = window.screen.orientation.type;
  const userAgent = navigator.userAgent || navigator.vendor;
  const regexp = /mobile/i;
  const matches = userAgent.match(regexp);
  return { height, width, orientation, device: matches ? 'mobile' : 'desktop' };
}

export default function updateDeviceScreen() {
  const { device, width } = getScreenSize();
  if (device === 'desktop' && width >= 1096) return true;
  return false;
}
