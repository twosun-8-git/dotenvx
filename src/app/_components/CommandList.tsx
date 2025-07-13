export function CommandList() {
  return (
    <div>
      <h2 className="mb-2 text-[22px] font-bold">dotenvx コマンド一覧</h2>
      <div className="w-full bg-gray-100 p-4 mb-10 rounded-md text-sm w-full overflow-x-auto">
        <pre className="mb-4">
          <i>環境変数の読み込み</i>
          <br />
          npx dotenvx get HELLO
        </pre>
        <pre className="mb-4">
          <i>ファイルを指定して読み込む</i>
          <br />
          npx dotenvx get HELLO -f .env.production
        </pre>
        <pre className="mb-4">
          <i>暗号化して環境変数をセットする （ MESSAGE=hello world ）</i>
          <br />
          npx dotenvx set MESSAGE hello world
        </pre>
        <pre className="mb-4">
          <i>環境変数を全て暗号化する</i>
          <br />
          dotenvx encrypt
          <br />
          dotenvx encrypt -f .env.production
        </pre>
      </div>
    </div>
  );
}
