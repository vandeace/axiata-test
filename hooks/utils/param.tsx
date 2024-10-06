import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface UseMutableSearchParams {
  set(key: string, value: string | null): void;
  append(key: string, value: string): void;
  delete(key: string, value?: string): void;
  get(key: string): string | null;
  has(key: string, value?: string): boolean;
  size: number;
}

export default function useMutableSearchParams(): UseMutableSearchParams {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function replaceSearchParams(newParams: URLSearchParams) {
    router.replace(`${pathname}?${newParams}`, { scroll: false });
  }

  return {
    get(key) {
      return params.get(key);
    },

    size: params.size,

    has(key, value) {
      if (value) {
        return params.getAll(key).includes(value);
      }

      return params.has(key, value);
    },
    set(key, value) {
      const newParams = new URLSearchParams(params);

      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }

      replaceSearchParams(newParams);
    },

    append(key, value) {
      const newParams = new URLSearchParams(params);

      newParams.append(key, value);

      replaceSearchParams(newParams);
    },

    delete(key, value) {
      const newParams = new URLSearchParams(params);
      if (value) {
        const newValues = newParams.getAll(key).filter(item => item !== value);

        newParams.delete(key);

        for (const value of newValues) {
          newParams.append(key, value);
        }
      } else {
        newParams.delete(key);
      }
      replaceSearchParams(newParams);
    },
  };
}
