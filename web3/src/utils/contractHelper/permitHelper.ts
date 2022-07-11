import { BigNumber } from "ethers";
import { defaultAbiCoder, keccak256, solidityPack, toUtf8Bytes } from "ethers/lib/utils";


export function getDomainSeparator(tokenAddress: string, name: string, version: string) {
    /*
    DOMAIN_SEPARATOR = keccak256(
        abi.encode(
            keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"),
            keccak256(bytes(name())),
            keccak256(bytes(version)),
            chainId,
            address(this)
        )
    );
    */
    return keccak256(
        defaultAbiCoder.encode(
            ['bytes32', 'bytes32', 'bytes32', 'uint256', 'address'],
            [
                keccak256(
                    toUtf8Bytes('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)')
                ),
                keccak256(toUtf8Bytes(name)),
                keccak256(toUtf8Bytes(version)),
                1,
                tokenAddress
            ]
        )
    );
}

export function getPermitTypehash() {
    return keccak256(
        toUtf8Bytes('Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)')
    );
}

export function getDeadline() :number {
    return (Math.ceil(Date.now() / 1000) + (20 * 60));
}

export async function getApprovalDigest(
    domainSeparator: string,
    permitTypeHash: string,
    approve: {
        owner: string
        spender: string
        value: BigNumber
    },
    nonce: BigNumber,
    deadline: BigNumber
): Promise<string> {
    const permitData = defaultAbiCoder.encode(
        ['bytes32', 'address', 'address', 'uint256', 'uint256', 'uint256'],
        [
            permitTypeHash,
            approve.owner,
            approve.spender,
            approve.value.toString(),
            nonce.toString(),
            deadline.toString()
        ]
    )

    return keccak256(
        solidityPack(
            ['bytes1', 'bytes1', 'bytes32', 'bytes32'],
            ['0x19', '0x01', domainSeparator, keccak256(permitData)]
        )
    );
}

