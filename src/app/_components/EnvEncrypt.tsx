export function EnvEncrypt() {
  return (
    <div>
      <h2 className="mb-2 text-[22px] font-bold">
        <i>`.env.development`</i>, <i>`.env.production`</i>
        （暗号化）
      </h2>
      <div className="flex justify-between gap-x-4 text-gray-500">
        <div className="w-1/2 bg-gray-100 p-4 rounded-md text-sm w-full overflow-x-auto">
          <pre>
            <i>// .env.development</i>
            <br />
            #/-------------------[DOTENV_PUBLIC_KEY]--------------------/
            <br />
            public-key encryption for .env files
            <br />
            #/ [how it works](https://dotenvx.com/encryption) /
            <br />
            #/----------------------------------------------------------/
            <br />
            DOTENV_PUBLIC_KEY_DEVELOPMENT="03d1c02842ba159b8d7f2194e31b193091ff31231c7a3f14948a0aaba9d952cee2"
            <br />
            <br />
            USER_NAME=encrypted:BOLPVy1BSV3x7ynG5TJB6Lt2JEUEN9K3buc0uL7eg2N7B2Rsf4JTthAifDKYU0oUpVj7+yQMdzbgszAUOztPL/21LqBAz41tcFiz9knmx2vZy1funrIAJByQK8wv9m+zxpB5PsH5Ag==
            <br />
            PASSWORD=encrypted:BDDVqErVttwYb67ZbSAAPx8F6uRRuweuE+clkCg9rRiAtYGEsuPzflxgUr8dniazriPQSMTljFB5kQm4T2n+sRlrRuTTa70cRwBPRcMHdJYa+BSRMXYImayYrYhk8/6cHszXCD7LET2/
          </pre>
        </div>
        <div className="w-1/2 bg-gray-100 p-4 rounded-md text-sm w-full overflow-x-auto">
          <pre>
            <i>// .env.production</i>
            <br />
            #/-------------------[DOTENV_PUBLIC_KEY]--------------------/
            <br />
            public-key encryption for .env files
            <br />
            #/ [how it works](https://dotenvx.com/encryption) /
            <br />
            #/----------------------------------------------------------/
            <br />
            DOTENV_PUBLIC_KEY_PRODUCTION="02ec7e5af845b33dd3f72fd880afcb167bceafe6a3da6a4ca47079f2a80f94a90d"
            <br />
            <br />
            USER_NAME=encrypted:BKC9+20g32z2YNt7cyYD1pxQH8roay2BBAthYtSootlHZF4EqGdDXq12Pk+Arf67BNNJg5WWUiWMxMGdI289z5F43URtPmTR6zV5FLlACPmjAwC1LHUof/w1JhdfKRWrMNii1n/ICA==
            <br />
            PASSWORD=encrypted:BCkiYqg5r9VsreoXmnwLVvxVxLepGru4fDMUdElKkZJZYfo7yA+4Y1N/ccqONO7tsZGHjANOW+/1/KDMath0TEzR0SrnMoAFWAJtTCFtKY5HFbs9L0J/T+pyE3j+/9thpI1zdrh3cQY=
          </pre>
        </div>
      </div>
    </div>
  );
}
