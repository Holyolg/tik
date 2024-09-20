import { FC } from "react";

interface Props {
	data: { type: string; content: string }[];
}

export const GenerateDesc: FC<Props> = ({ data }) => {
	return (
		<div>
			{data.map((item, index) => {
				if (item.type === "p") {
					if (Array.isArray(item.content)) {
						return (
							<p key={index}>
								{item.content.map((subItem, subIndex) => {
									if (subItem.bold) {
										return <b key={subIndex}>{subItem.text}</b>;
									} else {
										return <span key={subIndex}>{subItem.text}</span>;
									}
								})}
							</p>
						);
					} else {
						return <p key={index}>{item.content}</p>;
					}
				}
				return null;
			})}
		</div>
	);
};
