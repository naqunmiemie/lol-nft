export function getContractStateStr(state: boolean): string {
  if (state) {
    return "Paused";
  } else {
    return "Running";
  }
}
