export function EnvPlane() {
  return (
    <div>
      <h2 className="mb-2 text-[22px] font-bold">
        <i>`.env.development`</i>, <i>`.env.production`</i>
        （平文）
      </h2>
      <div className="flex justify-between gap-x-8 text-gray-500">
        <div className="w-1/2 bg-gray-100 p-4 rounded-md text-sm w-full overflow-x-auto">
          <pre>
            <i>// .env.development</i>
            <br />
            USER_NAME=yamada
            <br />
            PASSWORD=12345678
            <br />
          </pre>
        </div>
        <div className="w-1/2 bg-gray-100 p-4 rounded-md text-sm w-full overflow-x-auto">
          <pre>
            <i>// .env.production</i>
            <br />
            USER_NAME=tanaka
            <br />
            PASSWORD=abcdefg
            <br />
          </pre>
        </div>
      </div>
    </div>
  );
}
