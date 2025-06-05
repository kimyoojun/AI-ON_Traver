import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(import.meta.env.VITE_PUBLIC_SUPABASE_URL,
    import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY)
// 슈파베이스 js라이브러리에서 createclient라는 함수를 불러옴, 이 함수를 통해서 슈파베이스 url과 anon 키를 사용해서 클라이언트 생성, 만든 클라이언트를 변수 슈파베이스에 담음 (export로 다른 파일에서도 사용 가능)
// 만든 클라이언트는 변수의 값