import { ref, type Ref } from 'vue';

export interface UseFetchOptions<T> {
  autoExecute?: boolean;
  defaultValue?: T | null;
}

export interface UseFetchReturn<T> {
  data: Ref<T | null>;
  error: Ref<unknown>;
  isLoading: Ref<boolean>;
  execute: () => Promise<void>;
}

export function useFetch<T>(
  fn: () => Promise<T>,
  options: UseFetchOptions<T> = {},
): UseFetchReturn<T> {
  const { autoExecute = true, defaultValue = null } = options;

  const data = ref<T | null>(defaultValue) as Ref<T | null>;
  const error = ref<unknown>(null);
  const isLoading = ref(false);

  const execute = async (): Promise<void> => {
    isLoading.value = true;
    error.value = null;
    try {
      data.value = await fn();
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  };

  if (autoExecute) {
    execute();
  }

  return {
    data,
    error,
    isLoading,
    execute,
  };
}
