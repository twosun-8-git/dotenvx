export function Result() {
  return (
    <div>
      <h2 className="text-[22px] font-bold">環境変数を出力</h2>
      <p className="mb-4 text-gray-500">
        <i>※ `.env.development`と`.env.production` で値が異なることを確認</i>
      </p>
      <table className="border-separate border border-gray-300 rounded-lg overflow-hidden text-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">USER_NAME</th>
            <th className="py-2 px-4  border-l border-b border-gray-300">
              PASSWORD
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 text-blue-500">{process.env.USER_NAME}</td>
            <td className="py-2 px-4 text-blue-500 border-l border-gray-300">
              {process.env.PASSWORD}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
