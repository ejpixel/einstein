#!/bin/bash
LOCAL_HOSTNAME=localhost
LOCAL_PORT=3000

REMOTE_HOSTNAME=""
REMOTE_PORT=8080

# default
HOSTNAME=${LOCAL_HOSTNAME}
PORT=${LOCAL_PORT}

TARGET=""
PARAMS=$1$2

BUILD_PARAM="-p"

if [[ "${PARAMS}" = *"android-device"* ]]; then
	TARGET="android-device"
	BUILD_PARAM="--mobile-server"
elif [[ "${PARAMS}" = *"android-emulator"* ]]; then
	TARGET="android"
	BUILD_PARAM="--mobile-server"
fi

if [[ "${PARAMS}" = *"remote"* ]]; then
	HOSTNAME=${REMOTE_HOSTNAME}
	PORT=${REMOTE_PORT}
fi

if [[ "${TARGET}" = "" ]]; then
	PLATFORM="web"
else
	PLATFORM=${TARGET}
fi

echo "Subindo quasar... Escutando na porta 9090".
java -jar lib/web_2.11-4.5.7-one-jar.jar -c quasar-config.json &

echo "Subindo app na plataforma "${PLATFORM}" no endereço "${HOSTNAME}" porta "${PORT}"...";
echo meteor run ${TARGET} ${BUILD_PARAM} ${HOSTNAME}:${PORT};
meteor run ${TARGET} ${BUILD_PARAM} ${HOSTNAME}:${PORT}
