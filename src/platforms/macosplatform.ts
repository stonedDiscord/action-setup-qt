import * as core from '@actions/core';
import * as ex from '@actions/exec';

import UnixPlatform from './unixplatform';

export default class MacosPlatform extends UnixPlatform
{
    public addExtraEnvVars(basePath: string): void {
		super.addExtraEnvVars(basePath);
		core.addPath("/usr/local/opt/make/libexec/gnubin");
	}
	
    public async runPreInstall(): Promise<void> {
		await super.runPreInstall();
		await ex.exec("brew", ["update"]);
		await ex.exec("brew", ["install", "make", "p7zip"]);
	}
}