export interface ThrottleSettings {
  /**
   */
  leading?: boolean | undefined;
  /**
   */
  trailing?: boolean | undefined;
}

export type ThrottleType = <T extends (...args: any) => any>(
  func: T,
  wait?: number,
  options?: ThrottleSettings
) => ((...arg: any[]) => any) | ((...arg: any[]) => Promise<any>);

interface DebounceSettings {
  /**
   */
  leading?: boolean | undefined;
  /**
   */
  // maxWait?: number | undefined;
  /**
   */
  trailing?: boolean | undefined;
}

// interface DebouncedFunc<T extends (...args: any[]) => any> {
//   (...args: Parameters<T>): ReturnType<T> | undefined;
//   cancel(): void;
//   flush(): ReturnType<T> | undefined;
// }

// interface DebouncedFuncLeading<T extends (...args: any[]) => any> extends DebouncedFunc<T> {
//   (...args: Parameters<T>): ReturnType<T>;
//   flush(): ReturnType<T>;
// }
export interface DebounceSettingsLeading extends DebounceSettings {
  leading: true;
}

// export type DebounceType = <T extends (...args: any) => any>(
//   func: T,
//   wait: number | undefined,
//   options: DebounceSettingsLeading
// ) => DebouncedFuncLeading<T>;
export type DebounceType = <T extends (...args: any) => any>(
  func: T,
  wait?: number | undefined,
  options?: DebounceSettingsLeading
) => ((...arg: any[]) => any) | ((...arg: any[]) => Promise<any>);
