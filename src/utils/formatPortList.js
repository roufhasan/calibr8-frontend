export const formatPortList = (ports, fullSpec = false) => {
  if (!ports) return [];
  const list = [];
  if (ports.hdmi?.count)
    list.push(`HDMI ${ports.hdmi.version ?? ""} ×${ports.hdmi.count}`.trim());
  if (ports.displayport?.count)
    list.push(
      `DP ${ports.displayport.version ?? ""} ×${ports.displayport.count}`.trim(),
    );
  if (ports.usb_c?.count)
    list.push(
      `USB-C ${ports.usb_c.version ?? ""} ×${ports.usb_c.count}`.trim(),
    );
  if (ports?.audio && fullSpec) list.push(`Audio Out ×${ports.audio.count}`);
  return list;
};
