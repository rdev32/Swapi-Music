const validPid = (url: string, pid: string | string[] | undefined) => {
  if (pid) {
    return url;
  } else {
    return "";
  }
};
export default validPid;
