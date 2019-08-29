<template>
	<div>
		<Header />
		<v-container grid-list-xs>
			<ChatWindow />
		</v-container>
	</div>
</template>

<script>
import Header from "../components/Header";
import ChatWindow from "../components/ChatWindow";
export default {
	components: {
		Header,
		ChatWindow
	}
};
</script>

<style>
</style>