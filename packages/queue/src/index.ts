function isInstalled(id: string): boolean {
  try {
    require(id);
    return true;
  } catch (error) {
    return false;
  }
}

if (!isInstalled("lavaclient"))
  throw new Error("Please install Lavaclient.");

export * from "./Queue";
export * from "./Plugin";
export * from "./Song";
