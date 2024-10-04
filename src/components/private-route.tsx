"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { encodeUrl } from "~/utils/encryption-url";
import { useAuthStore } from "~/store/auth/AuthStore";
export default function PrivateRouter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuth, user } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (!isAuth || !user) {
      router.replace(`/auth?back_to=${encodeUrl(pathname)}`);
    }
  }, [isAuth, pathname, router, user]);
  return isAuth && user ? <>{children}</> : null;
}
